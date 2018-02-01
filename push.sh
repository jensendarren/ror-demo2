#!/bin/sh
set -x

LC=$(git rev-parse --short HEAD)
docker build -f Dockerfile -t jensendarren/react-on-rails-table-demo
:${LC} .
docker push jensendarren/react-on-rails-table-demo:${LC}