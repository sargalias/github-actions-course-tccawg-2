#!/bin/sh

echo "::debug ::Debug message"
echo "::warning ::Warning message"
echo "::error ::Error message"

echo "Hello $1"

FOO=foo
echo "::add-mask::$FOO"
echo "Here's a secret: $FOO"

TIME=$(date)
echo "::set-output name=time::$TIME"

echo "::group::Logging some stuff"
echo "Stuff 1"
echo "Stuff 2"
echo "Stuff 3"
echo "::endgroup::Logging some stuff"

echo "HELLO=hello" >> $GITHUB_ENV