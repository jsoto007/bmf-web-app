#!/usr/bin/env bash
# Starts the production server and checks every public route plus the form
# endpoint's validation paths. Used by CI and runnable locally after `npm run build`.
set -euo pipefail

PORT="${PORT:-3100}"
BASE="http://localhost:${PORT}"

npm start -- --port "$PORT" >/tmp/next-start.log 2>&1 &
SERVER_PID=$!
trap 'kill "$SERVER_PID" 2>/dev/null || true' EXIT

for _ in $(seq 1 40); do
  if curl -fsS -o /dev/null "$BASE/" 2>/dev/null; then break; fi
  sleep 0.5
done

fail=0
check() { # check <label> <expected-status> <url> [curl args...]
  local label=$1 expected=$2 url=$3; shift 3
  local status
  status=$(curl -s -o /tmp/smoke-body -w '%{http_code}' "$url" "$@")
  if [[ "$status" == "$expected" ]]; then
    echo "ok   $label ($status)"
  else
    echo "FAIL $label: expected $expected, got $status"; fail=1
  fi
}
expect_body() { # expect_body <label> <grep pattern>
  if grep -qi -- "$2" /tmp/smoke-body; then echo "ok   $1"; else echo "FAIL $1: pattern not found: $2"; fail=1; fi
}

check "home page" 200 "$BASE/"
expect_body "home has title" "<title>Burdier Mobile Phlebotomy"
expect_body "home has JSON-LD" 'application/ld+json'
expect_body "home has canonical" 'rel="canonical"'
check "robots.txt" 200 "$BASE/robots.txt";          expect_body "robots allows ClaudeBot" "ClaudeBot"
check "sitemap.xml" 200 "$BASE/sitemap.xml";        expect_body "sitemap has home" "<loc>https://burdiermobilephlebotomy.com/</loc>"
check "manifest" 200 "$BASE/manifest.webmanifest"
check "llms.txt" 200 "$BASE/llms.txt";              expect_body "llms.txt has heading" "# Burdier Mobile Phlebotomy"
check "llms-full.txt" 200 "$BASE/llms-full.txt";    expect_body "llms-full has FAQ" "## Frequently asked questions"
check "og image" 200 "$BASE/og-image.png"
check "icon" 200 "$BASE/icon.png"
check "security header" 200 "$BASE/" -I;            expect_body "nosniff header" "x-content-type-options: nosniff"

JSON='Content-Type: application/json'
check "contact: malformed json" 400 "$BASE/api/contact" -X POST -H "$JSON" -d '{bad'
check "contact: invalid fields" 422 "$BASE/api/contact" -X POST -H "$JSON" -d '{"mode":"org","name":"","phone":"1","email":"x"}'
expect_body "contact: field errors returned" '"fields"'
check "contact: honeypot ignored" 200 "$BASE/api/contact" -X POST -H "$JSON" -d '{"mode":"org","website":"spam"}'
check "contact: GET not allowed" 405 "$BASE/api/contact"

if [[ $fail -ne 0 ]]; then
  echo; echo "Server log:"; cat /tmp/next-start.log; exit 1
fi
echo "All smoke checks passed."
