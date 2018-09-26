#!/bin/bash
set -e

PROJECT="frontmen"
DIR_GIT="/var/repo/"
USER="git"
LIVE_IP="149.210.172.104"

ssh ${USER}@${LIVE_IP} -v exit

git config --global push.default simple # we only want to push one branch — master
# specify the repo on the live server as a remote repo, and name it 'production'
# <user> here is the separate user you created for deploying
git remote add live ssh://${USER}@${LIVE_IP}${DIR_GIT}${PROJECT}.git

git add dist
git commit -am "Travis CI"

git push live master # push our updates
