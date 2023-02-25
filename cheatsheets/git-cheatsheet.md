# GIT Cheatsheet

## What is git?
* Keeps track of code history
* Takes snapshots of your files
* You decide when to make a snapshot by makeing a "commit"

## Basic Commands

```bash
git init        #Initialize local git repo
git add <file>  # Add file(s) to index
git status      # check status
git commit      # Commit changes in index
git push        # push to remote repository
git pull        # Pull lates from remote repo
git clone       # clone repo into a new directory
```
### Initalize a Git Repo
```bash
#Go to the directory
cd development

#Initalize Git
git init

#set your git config
git config --global user.name 'Dominik'
git config --global user.mail 'dbitterli@gmail.com'

#add all files to the index
git add .

#check the status of the index
git status

#remove file from index
git rm --cached cheatsheets/git-cheatsheet.md

#add all markdown file to index
git add cheatsheets/*.md
```