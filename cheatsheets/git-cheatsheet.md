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
## Initalize a Git Repo
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

#commit the changes added to index
git commit -m 'inital commit'

```
### Git ignore
To ignore file you can create a .gitignore file and specify the filename in it.

you can add for example *.txt to the text file to exclude all text files or /dir to exclude a specific folder

## Branches
You can create a branch if you want to develop a functionality and don't commit it to the main branche till the code is finished.

### Code example "Create branch"
```bash
#create a branch
git branch examplebranch

#to check on which branch you are
git status

#to switch to the new branch you need to checkout
git checkout examplebranch



```