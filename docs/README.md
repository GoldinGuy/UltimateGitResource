# DSC Github Pages Lab

This is a demo site to practice using Git and Github Pages. It is a basic portfolio/resume template. Feel free to alter/edit it to your liking. If you have experience with Web Dev, you can use a completely different site for the lab.

Profile photos are randomly pulled from [ThisPersonDoesNotExist](https://thispersondoesnotexist.com/). Every time you refresh you should see a different one.

### Completing the Lab

- Copy this repository using `git clone git@github.com:GoldinGuy/UltimateGitResource.git` on the command line.
- Once you have the repo on your local machine, edit the site to your liking in a text editor (I recommend either [VSCode](https://code.visualstudio.com/) or [Atom](https://atom.io/)). _(You can skip this step if you don't care about customization - it's just cool to have your own personal profile site)_
  - You can change the font to anything you like from [Google Fonts](https://fonts.google.com/) by replacing the name of the font in the HTML link.
  - You can use any of the [TailwindCSS](https://v1.tailwindcss.com/) classes to edit your styling.
  - The quickest way to edit the site is to `Ctrl-F` for the default person "Alex B. Carroll" and replace it with your name. Then do the same for their email "alexbcarroll@hey.com", address, linkedIn, and so on. It will likely require a basic knowledge of HTML5.
- On [Github](https://github.com/), create a remote repository. You can do this by clicking the `+` icon in the top-right, then `new repository`, then filling out the name and description. I recommend naming it `Ultimate Git CheatSheet` but you can call it whatever you want.
- Run Git commands in your terminal after making your changes to push your local state to the remote repo
 <details>
  <summary>If you are stuck, click here to see the necessary commands:</summary>
  
```
git init

git add .

git commit -m "<name your commit>"

git remote set-url origin git@github.com:<username>/<repository-name>.git

git push -u origin master
```
</details>

- If you navigate to `https://github.com:<username>/<repository-name>`, you should now see your repo in all its glory
- We are now going to setup `Github Pages` to host our demo site for free
  - Navigate to the `settings` tab of the Github repo at `https://github.com:<username>/<repository-name>/settings`.
  - Scroll down to the section titled `GitHub Pages`.
  - Click `branch` and select `main`. Then click the folder icon and select `docs`. This sets the Github pages to build from the `/docs` folder which contains our site.
  - Click save, and wait a minute for your site to load. It should look similar to the image below when complete.
- You're done! Now you have your own personal profile/resume site, hosted for free on Github. You learned how to use the most common commands, and hopefully have a basic understanding of how git works.

![image](https://user-images.githubusercontent.com/47064842/103049165-f2f02980-455e-11eb-85c1-ac598508f433.png)

### Data Breach - Bonus Challenge! 
In the index.html file there is a `DUMMY_API_KEY`. 
By completing this lab as normal, we are simulating an API key (essentially, a password) being accidentally exposed *(Something I have done many a time)*.

For this bonus challenge, you must quickly remove all traces from this credential from your history. Requirements are as follows:
 - You must include the `DUMMY_API_KEY` in the initial commit
 - You must use Git commands to remove the API Key from your history. There are many ways to accomplish this. 
 <details>
  <summary>If you are stuck, click here for a hint:</summary>
  
```Use Rebase, Force Push, Commit --amend, or git filter-branch```
</details>

Notably, if this was a real data breach and you already pushed the API key, it's too late. You should do the above, but I also recommend invaldiating and changing the API key to be safe. Github has an article about it [here](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/removing-sensitive-data-from-a-repository).

This template is based on an open-source portfolio site found [here](https://github.com/mohusman360/mohusman360.github.io)
