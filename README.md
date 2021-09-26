# UltimateGitResource
📚 A list of helpful Git commands for the Google DSC Git Event & Hackapalooza Hackathon

[![Discuss On Discord][discord]][discord-url]
[![Contributors][contributors-shield]][contributors-url]
[![Issues][issues]][issues-url]

[**Watch a recording of the All About Git presentation here!**](https://www.youtube.com/watch?v=mqhDMv6nIVI)

Git is the most popular [version control system](https://en.wikipedia.org/wiki/Version_control). It tracks changes you make to files and keeps a record of your work. It also lets you revert to earlier versions of your code if the need arises. Git drastically improves collaboration, allowing multiple people to work in sync on the same source code. Below is a selection of the most helpful and commonly used Git commands to power up your programming!

*Note - Wherever used the shorthand `Repo` means [Repository](https://en.wikipedia.org/wiki/Repository_(version_control))*

The [Docs](https://github.com/GoldinGuy/UltimateGitResource/tree/main/docs) folder of this repo contains a simple profile/resume static site built on HTML5 and [TailwindCSS](https://v1.tailwindcss.com/) to help learn about [Github pages](https://pages.github.com/). You can clone the repository and test it out yourself, or visit [this link](https://goldinguy.github.io/UltimateGitResource/) to see a live demo. For more info look at the [README](https://github.com/GoldinGuy/UltimateGitResource/blob/main/docs/README.md) for the `/docs` directory.

This repo contains a powerpoint presentation explaning many of these commands that can be viewed online [here](https://docs.google.com/presentation/d/1BHa_ZxiyRRJQKaCRXTozmMhlPgkFcx-zn5esd5n-HWY/edit?usp=sharing).

## Table of Contents

- [Installing Git](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/set-up-git)
- [Gitting Existing Projects](#-gitting-existing-projects)
- [Gitting Started - Setting Up a New Repo](#-gitting-started---setting-up-a-new-repo)
- [The Nitty Gitty - Examine History & State](#-the-nitty-gitty---examine-history--state)
- [Branching Out - Grow, Mark & Tweak History](#-branching-out---grow-mark--tweak-history)
- [Git Gud - Dealing With Merge Conflicts](#-git-gud---dealing-with-merge-conflicts)
- [Git More - Pushing, Pulling, & Remote Origin](#-git-more---pushing-pulling--remote-origin)
- [Gitting Complicated - The Danger Zone](#-gitting-complicated---the-danger-zone)
- [Git Resources](#-more-git-resources)
- [Contributing](#contributing)

## Git Commands

You can run `git help` in the terminal to learn about many of these commands at any time. `git help -a` and `git help -g` list available subcommands and 
concept guides. `git help <command>` or `git help <concept>` allow you to read about a specific subcommand or concept.

`HEAD` represents your current working directory. The `HEAD` pointer can be moved to different branches, tags, or commits using `git checkout`.

The `gitignore` file allows you to control what gets committed and what doesn't, allowing you to keep your keys and passwords secure, and reducing the amount of bloat on the remote repo. You can learn more about it in the [.gitignore file](https://github.com/GoldinGuy/UltimateGitResource/blob/main/.gitignore) above.


### 📗 Gitting Existing Projects

| Command | Description |
| ------- | ----------- |
| `git clone ssh://git@github.com/<username>/<repository-name>.git` | Create a local copy of a remote repo using SSH |
| `git clone https://github.com/<username>/<repository-name>.git` | Create a local copy of a remote repo using HTTPS |

You can also [fork](https://github.com/GoldinGuy/UltimateGitResource/fork) repos *(create a copy of the original repo that remains on your GitHub account)*.


### 📘 Gitting Started - Setting Up a New Repo

| Command | Description |
| ------- | ----------- |
| `git init` | Initialize a local Git repository |
| `git add .` | Add all files in the working directory to the staging area |
| `git commit -m "<commit message>"` | Commit your changes |
| `git remote add origin git@github.com:<username>/<repository-name>.git` | Add upstream repo to publish commits at (the remote repo) |
| `git push -u origin master` | Push your changes to remote repository |

#### More Options For Staging Files

| Command | Description |
| ------- | ----------- |
| `git add <file-name.txt>` | Add a single file to the staging area |
| `git add -A` | Add all files in all directories to the staging area |
| `git rm -r <file-name.txt>` | Remove a single file (or folder) |
| `git rm -r . --cached` | Remove all files recursively from staging area |


### 📙 The Nitty Gitty - Examine History & State

| Command | Description |
| ------- | ----------- |
| `git status` | See details about the current branch |
| `git show` | Shows changes in committed files |
| `git log` | View changes in commit history |
| `git log --summary` | View changes (detailed) |
| `git log --oneline` | View changes (briefly) |
| `git diff <source branch> <target branch>` | Preview changes before merging |


### 📒 Branching Out - Grow, Mark & Tweak History

| Command | Description |
| ------- | ----------- |
| `git branch` | List branches (the * is the current branch) |
| `git branch -a` | List all branches (local and remote) |
| `git branch <branch name>` | Create a new local branch |
| `git branch -d <branch name>` | Delete a local branch |
| `git push origin --delete <branch name>` | Delete a remote branch |
| `git checkout -b <branch name>` | Create a new local branch and switch to it |
| `git checkout -b <branch name> origin/<branch name>` | Clone a remote branch and switch to it |
| `git branch -m <old branch name> <new branch name>` | Rename a local branch |
| `git checkout <branch name>` | Switch to a branch |
| `git checkout -` | Switch to the most recent branch |
| `git checkout -- <file-name.txt>` | Revert your recent changes to a file |


### 📕 Git Gud - Dealing With Merge Conflicts

| Command | Description |
| ------- | ----------- |
| `git merge <branch name>` | Merge a branch into the active branch |
| `git merge <source branch> <target branch>` | Merge a branch into a target branch |
| `git merge --abort` | Abort the current conflict resolution process, and attempt to reconstruct the pre-merge state |
| `git stash` | Stash changes in a dirty working directory |
| `git stash clear` | Remove all stashed entries |


### 📓 Git More - Pushing, Pulling, & Remote Origin

| Command | Description |
| ------- | ----------- |
| `git push origin <branch name>` | Push a branch to your remote repo |
| `git push -u origin <branch name>` | Push changes to remote repo (and remember the branch) |
| `git push` | Push changes to remote repo (only if you have previously set a remote origin) |
| `git push origin --delete <branch name>` | Delete a remote branch |
| `git pull` | Synchronize local repo with remote repo |
| `git pull origin <branch name>` | Pull changes from remote repo |
| `git fetch` | Checks to see if there are any changes on the remote repo (does not pull changes) | 
| `git fetch --prune` | Fetch all remote branch refs and delete those no longer in use |
| `git remote -v` | Shows URLs of remote repositories when listing your current remote connections |
| `git remote add origin ssh://git@github.com/<username>/<repository-name>.git`| Add upstream repo to publish commits at (the remote repo) |
| `git remote set-url origin ssh://git@github.com/<username>/<repository-name>.git` | Set a repo's origin branch to SSH |


### 📔 Gitting Complicated - The Danger Zone

*HEY! Changing your history may cause undesired side effects. You may lose data. Many of these commands cannot be undone. If you change your remote history, don't say I didn't warn you.*

| Command | Description |
| ------- | ----------- |
| `git rebase <branch>` |  Reapply commits on top of another base tip |
| `git rebase -i <commitID>` | Reapply all commits from <commitID forward |
| `git cherry-pick <commitID>` | Apply the changes introduced by some existing commits |
| `git clean -f` | Removes and deletes untracked files from the working tree |
| `git clean -fd` | Remove all untracked directories |
| `git commit --amend` | Allows you to edit a previous commit that has not been pushed |
| `git commit --fixup <commitID>` | Combine new changes with an existing commit under the same name |
| `git reset <commitID>` | Reverts all commits after specified commit, while keeping local changes |
| `git reset --hard <commitID>` | Reverts all history and changes back to the given commit |
| `git reset HEAD~1` | Revert 1 commit (while keeping current local state) |
| `git push origin <branch> --force` | Deletes all your previous commits and pushes your current one |


### 📖 More Git Resources
- [Git Docs](https://git-scm.com/doc), for those who want to dive deep into the documentation
- [Git Handbook](https://guides.github.com/introduction/git-handbook/), for those who want a quick overview
- [Visual Git CheatSheet](https://ndpsoftware.com/git-cheatsheet.html), for those who are visual learners
- [Official Printable PDF CheatSheet](https://training.github.com/downloads/github-git-cheat-sheet.pdf), for those who need the physical copy
- [Visualize Git Under the Hood](https://git-school.github.io/visualizing-git/), allows you to explore exactly how commands affect repo structure
- [Stanford GitMagic](http://www-cs-students.stanford.edu/~blynn/gitmagic/), a plain but detailed quide to git
- [GitReady](http://gitready.com/), lets you learn git one commit at a time
- [Git From the Bottom Up](https://jwiegley.github.io/git-from-the-bottom-up/), gives you a better understanding of the powerful system
- [Git, the Simple Guide](https://rogerdudler.github.io/git-guide/), as stated, with no deep knowledge required
- [Git Explained (Not just commands)](https://towardsdatascience.com/git-help-all-2d0bb0c31483), a brief guide including more than commands
- [Git-It](https://github.com/jlord/git-it-electron#what-to-install), an app that teaches you git via challenges in the terminal
- [Interactive Way to Learn Git Branching](https://learngitbranching.js.org/), for an enjoyable way to tackle an important concept
- [Git Markdown Emoji](https://github.com/ikatyang/emoji-cheat-sheet), to spice up your Git repos
- [Article on Writing Good Commit Messages](https://chris.beams.io/posts/git-commit/), which pretty much everyone could stand to improve ;)
- [Github Student Developer Pack](https://education.github.com/pack), seriously, if you're a student you should have this
- [Intro to Git Rebase](https://dev.to/maxwell_dev/the-git-rebase-introduction-i-wish-id-had), a great explanation of a powerful command


### Contributing

1. Fork UltimateGitResource [here](https://github.com/GoldinGuy/UltimateGitResource/fork)
2. Create a branch with your improvements (`git checkout -b improvement/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin improvement/fooBar`)
5. Create a new Pull Request

#### Meta

Created by [@GoldinGuy](https://github.com/GoldinGuy) for the FAU Google DSC Git Event.

<!-- Markdown link & img dfn's -->

[discord-url]: https://discord.gg/gKYSMeJ
[discord]: https://img.shields.io/discord/689176425701703810
[issues]: https://img.shields.io/github/issues/GoldinGuy/UltimateGitResource
[issues-url]: https://github.com/GoldinGuy/UltimateGitResource/issues
[contributors-shield]: https://img.shields.io/github/contributors/GoldinGuy/UltimateGitResource.svg?style=flat-square
[contributors-url]: https://github.com/GoldinGuy/UltimateGitResource/graphs/contributors
