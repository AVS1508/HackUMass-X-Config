# Dashboard Example Configuration
Welcome to the example Dashboard configuration repository. This repository is intended to be a [submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules) of the [main Dashboard repo](https://github.com/fuseumass/dashboard). If you're reading this README we are assuming that you've decided to take the plunge and use Dashboard for your own event. Let's get started!

# Getting started
First we are going to ask that you please clone the main dashboard repository. You can do that by running `git clone https://github.com/fuseumass/dashboard.git`

Next please create a fork of the `redpandahacks-config` repository. You can do this by clicking the "fork" button at the top right hand corner of this page.

It's at this point that we get into some slightly complicated git magic. If you want an explanation of how it all works, please see the [wiki page](https://github.com/fuseumass/redpandahacks-config/wiki/Submodules) that we've created on git submodules. If you're wondering why in gods name we've chosen such an architecture, please also consult the wiki. Otherwise, let's just follow along with the following steps.

Fortunately there's basically 0 consequences if you mess this up, as you can _always_ delete the repo and start over without losing much (if any) work.

## Setting up the submodule
Open the `.gitmodules` file from the Dashboard repo that you've cloned. It should look something like this:
```
[submodule "hackathon-config"]
    path = hackathon-config
    url = https://github.com/fuseumass/redpandahacks-config
```
Inside this file, please replace the url with your url to the forked config repo. It should look something like this `https://github.com/your-username/yourhackathon-config`. Save this file.

Now you'll want to open a terminal and navigate to the folder containing the dashboard folder. Here, you'll want to run the following command `git submodule update --init --remote`.

Double check that Git has updated the configuration repo properly by seeing whether any of the files in the `hackathon-config` folder were updated with those from the `yourhackathon-config` repo. If it still shows up as redpandahacks, try this to bypass the flawed behavior of the git submodule update command above:
 - `rm -rf hackathon-config`
 - `git clone https://github.com/your-username/yourhackathon-config hackathon-config`

Now the `hackathon-config` folder is a submodule that tracks the github repository you created for your fork.

## Running the application
In order to simplify the development process we use Docker to develop locally. Please download it here: [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop). If you wish to develop without docker you'll have to set up and install Ruby and Rails on your own.

1. After installing Docker, navigate to the dashboard folder in your terminal
2. Run `docker_build.sh` or `docker_build.bat` depending on your platform
3. Run `docker_run.sh` or `docker_run.bat`
4. Navigate to [http://localhost:3000](http://localhost:3000) in your web browser of choice
5. You can log in with the credentials `admin@email.com` and `testpass`
6. All of the features are turned off by default, so in order to view everything go to the `admin` tab and then click `feature flags`. Turn on the things you'd like to test/view/use.

## Editing the hackathon config
At this point you'll probably want to edit the hackathon config to suit your needs. We won't go over the documentation for each option here (you can check the wiki for that). But we will go over a few steps you'll need to follow in order to make changes to this submodule git repository.

1. First navigate in your terminal to the `hackathon-config` folder.
2. Next please run `git checkout master`
3. Make all the edits you desire in the `hackathon-config` folder (you can preview these at the site running at [http://localhost:3000](http://localhost:3000) by simply refreshing the page)
    - Note: You may have to make some additional accounts that are attendees or mentors in order to be able to visit all of the pages.
4. From within your `hackathon-config` folder, add your changes to be tracked by git with `git add .` and then run `git commit -am "Your commit message here"` to commit your changes.
5. Finally run `git push origin master`

At this point if you ever find that your submodules are messed up in any way. You can always just delete your local dashboard repository and run through the steps in [setting up the submodule](#setting-up-the-submodule) again. Since your changes to the configuration repo are already pushed to the remote, you won't lose them.

Now that you've pushed your submodule to it's remote. We can update the main dashboard repository. Just run `git add .` and `git commit -am "updated copy"` from the main dashboard folder.

## In the case of updates
In the case of updates to the main dashbaord repo. You can pull them into your local copy by simply running `git pull -r origin master` from within your local dashboard folder. This method will _never_ have any conflicts. Enjoy seamless updates that you can integrate as soon as we release them :)

In the case of updates to dashboard that also require updates to the config repo (we'll try to avoid this as much as possible!). We will communicate this change in the release notes and you will have to deal with a merge conflict. Simply keep as much of your copy as you can while also integrating the changes we've made.

In this situation you'll have to do the following from within your `hackathon-config` folder.
1. `git add remote upstream https://github.com/fuseumass/redpandahacks-config.git`
2. `git pull upstream master`
3. Deal with the merge conflicts! Keep your copy, and our formatting and you should be good to go :)

# Deployment
For specific deployment instructions, please see the [dashboard wiki](https://github.com/fuseumass/dashboard/wiki/%5BUsers%5D-Deployment).

# Issues
If you encounter issues with the functionality of Dashboard please create an issue on the [issues page](https://github.com/fuseumass/dashboard/issues) of the main Dashboard repository and tag it with the `bug` label.

If you encounter issues with the functionality of the configuration files, please file a bug report on this repository's [issues](https://github.com/fuseumass/redpandahacks-config/issues) page and tag it with the `bug` tag so that we can track it.

Finally if you need technical assistance with setting up or deploying dashboard, use the [issues](https://github.com/fuseumass/redpandhacks-config/issues) page on this repository and tag your post with `technical support`.

# Contributing
We welcome your contributions to this open source project and we actively encourage every event who's using it to commit their tech resources to help make Dashboard better for everyone. To get started developing, head over to the [dashboard wiki](https://github.com/fuseumass/dashboard/wiki) and follow the instructions for setting up dashboard for development.

We thank you for any contributions or suggestions you have ❤️
