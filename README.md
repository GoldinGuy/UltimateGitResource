# UltimateGitResource
📚 A list of helpful Git commands for the Google DSC Git Event

Git is the most popular version control system. It tracks changes you make to files and keeps a record of your work. It also lets you revert to earlier versions of your code if the need arises. Git also drastically improves collaboration, allowing multiple people to work in sync on the same source code. Below is a selection of the most helpful and commonly used Git commands to power up your programming!

*Note - Wherever used the shorthand `Repo` means [Repository](https://en.wikipedia.org/wiki/Repository_(version_control))*

## Table of Contents

- [Installing Git](#installing--git)
- [Gitting Existing Projects](#existing--repos)
- [Gitting Started - Setting Up a New Repo](#new--repo)
- [The Nitty Gitty - Examine History & State](#history--status)
- [Branching Out - Grow, Mark & Tweak History](#branches)
- [Git Gud - Dealing With Merge Conflicts](#merge--stash)
- [Git You More - Detailed Pushing, Pulling, & Remote Origin](#push--pull)
- [Gitting Complicated - Rebase, Cherry-Pick, & Clean](#rebase--cherry)
- [Git Resources](#resources)
- [Contributing](#contributing)

## Git Commands

You can run `git help` in the terminal to learn about many of these commands at any time. `git help -a` and `git help -g` list available subcommands and 
concept guides. `git help <command>` or `git help <concept>` allows you to read about a specific subcommand or concept.

### 📗 Gitting Existing Projects

| Command | Description |
| ------- | ----------- |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | Create a local copy of a remote repo using SSH |
| `git clone https://github.com/[username]/[repository-name].git` | Create a local copy of a remote repo using HTTPS |

You can also [fork](https://github.com/GoldinGuy/UltimateGitResource/fork) repos or *create a copy of the original repo that remains on your GitHub account*.


### 📘 Gitting Started - Setting Up a New Repo

| Command | Description |
| ------- | ----------- |
| `git init` | Initialize a local Git repository |
| `git add .` | Add all files in the working directory to the staging area |
| `git commit -m "[commit message]"` | Commit your changes |
| `git remote add origin git@github.com:[username]/[repository-name].git` | Add upstream repo to publish commits at (the remote repo) |
| `git push -u origin master` | Push your changes to remote repository |

#### Adding Files - More Options

| Command | Description |
| ------- | ----------- |
| `git add [file-name.txt]` | Add a single file to the staging area |
| `git rm -r [file-name.txt]` | Remove a single file (or folder) |
| `git add -A` | Add all files in all directories to the staging area |


### 📙 The Nitty Gitty - Examine History & State

| Command | Description |
| ------- | ----------- |
| `git status` | See details about the current branch |
| `git log` | View changes in commit history |
| `git log --summary` | View changes (detailed) |
| `git log --oneline` | View changes (briefly) |
| `git diff [source branch] [target branch]` | Preview changes before merging |


### 📒 Branching Out - Grow, Mark & Tweak History

| Command | Description |
| ------- | ----------- |
| `git branch` | List branches (the * is the current branch) |
| `git branch -a` | List all branches (local and remote) |
| `git branch [branch name]` | Create a new local branch |
| `git branch -d [branch name]` | Delete a local branch |
| `git push origin --delete [branch name]` | Delete a remote branch |
| `git checkout -b [branch name]` | Create a new local branch and switch to it |
| `git checkout -b [branch name] origin/[branch name]` | Clone a remote branch and switch to it |
| `git branch -m [old branch name] [new branch name]` | Rename a local branch |
| `git checkout [branch name]` | Switch to a branch |
| `git checkout -` | Switch to the most recent branch |
| `git checkout -- [file-name.txt]` | Revert your recent changes to a file |


### 📕 Git Gud - Dealing With Merge Conflicts

| Command | Description |
| ------- | ----------- |
| `git merge [branch name]` | Merge a branch into the active branch |
| `git merge [source branch] [target branch]` | Merge a branch into a target branch |
| `git stash` | Stash changes in a dirty working directory |
| `git stash clear` | Remove all stashed entries |


### 📓 Git You More - Detailed Pushing, Pulling, & Alternative Remote Origin

| Command | Description |
| ------- | ----------- |
| `git push origin [branch name]` | Push a branch to your remote repo |
| `git push -u origin [branch name]` | Push changes to remote repo (and remember the branch) |
| `git push` | Push changes to remote repo (only if you have previously set a remote origin) |
| `git push origin --delete [branch name]` | Delete a remote branch |
| `git pull` | Synchronize local repo with remote repo |
| `git pull origin [branch name]` | Pull changes from remote repo |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git`| Add upstream repo to publish commits at (the remote repo) |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | Set a repo's origin branch to SSH |


### 📔 Gitting Complicated

| Command | Description |
| ------- | ----------- |



### 📖 More Git Resources
- [Git Docs](https://git-scm.com/doc), for those who want to dive deep into the documentation
- [Visual Git CheatSheet](https://ndpsoftware.com/git-cheatsheet.html), for those who are visual learners
- [Official Printable PDF CheatSheet](https://training.github.com/downloads/github-git-cheat-sheet.pdf), for those who need the physcial copy
- [Git Markdown Emoji](https://github.com/ikatyang/emoji-cheat-sheet), to spice up your Git repos
- [Article on Writing Good Commit Messages](https://chris.beams.io/posts/git-commit/), which pretty much everyone could stand to improve


### Contributing

1. Fork UltimateGitResource [here](https://github.com/GoldinGuy/UltimateGitResource/fork)
2. Create a branch with your improvements (`git checkout -b improvement/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin improvement/fooBar`)
5. Create a new Pull Request

#### Meta

Created by [@GoldinGuy](https://github.com/GoldinGuy) for the FAU Google DSC Git Event.
