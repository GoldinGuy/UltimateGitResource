# UltimateGitResource
📄 A list of helpful Git commands for the Google DSC Git Event

Git is the most popular version control system. It tracks changes you make to files and keeps a record of your work. It also lets you revert to earlier versions of your code if the need arises. Git also drastically improves collaboration, allowing multiple people to work in sync on the same source code. Below is a selection of the most helpful and commonly used Git commands to power up your programming!

*Note - Wherever used the shorthand `Repo` means [Repository](https://en.wikipedia.org/wiki/Repository_(version_control))*

### Gitting Existing Projects

| Command | Description |
| ------- | ----------- |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | Create a local copy of a remote repo using SSH |
| `git clone https://github.com/[username]/[repository-name].git` | Create a local copy of a remote repo using HTTPS |

You can also [fork](https://github.com/GoldinGuy/UltimateGitResource/fork) repos or *create a copy of the original repo that remains on your GitHub account*.


### Gitting Started - Setting Up A New Repository

| Command | Description |
| ------- | ----------- |
| `git init` | Initialize a local Git repository |
| Adding Files |
| `git add [file-name.txt]` | Add a single file to the staging area |
| `git rm -r [file-name.txt]` | Remove a single file (or folder) |
| `git add -A` | Add all new and changed files to the staging area |
| Commiting |
| `git commit -m "[commit message]"` | Commit your changes |
| Adding Remote Origin |
| `git remote add origin git@github.com:[username]/[repository-name].git` | Add upstream repo to publish commits at (the remote repo) |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git`| Add upstream repo to publish commits at (the remote repo) |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | Set a repo's origin branch to SSH |
| Pushing |
| `git push -u origin master` | Push your changes to remote repository |

### The Nitty Gitty - Status & Inspection

| Command | Description |
| ------- | ----------- |
| `git status` | See details about the current branch |
| `git log` | View changes in commit history |
| `git log --summary` | View changes (detailed) |
| `git log --oneline` | View changes (briefly) |
| `git diff [source branch] [target branch]` | Preview changes before merging |

### Branching Out

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

### Git Gud - Dealing With Merge Conflicts

| Command | Description |
| ------- | ----------- |
| `git merge [branch name]` | Merge a branch into the active branch |
| `git merge [source branch] [target branch]` | Merge a branch into a target branch |
| `git stash` | Stash changes in a dirty working directory |
| `git stash clear` | Remove all stashed entries |

### Git You More - Detailed Pushing & Pulling

| Command | Description |
| ------- | ----------- |
| `git push origin [branch name]` | Push a branch to your remote repo |
| `git push -u origin [branch name]` | Push changes to remote repo (and remember the branch) |
| `git push` | Push changes to remote repo (only if you have previously set a remote origin) |
| `git push origin --delete [branch name]` | Delete a remote branch |
| `git pull` | Synchronize local repo with remote repo |
| `git pull origin [branch name]` | Pull changes from remote repo |

