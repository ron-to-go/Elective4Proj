#!/usr/bin/env bash
set -euo pipefail

cd /opt/webeng

docker compose --env-file .env -f server/docker-compose.webeng.yml pull
docker compose --env-file .env -f server/docker-compose.webeng.yml up -d
docker image prune -f
