# Nathan Fairweather
---

# Part 4 - Project Description & Diagram

# Part 1 - Create a Docker container image

- The website located in [web-content](./web-content/) was "developed" using AI (Claude), as per the instructions (and is also the same one that I used in project 5). Once again, the prompt I used is as follows:
```
You are a senior full-stack developer. Create a simple website that contains the following:

- index.html, an html file representing the landing page of the website. The landing page for a cite titled "count up"
- counter.html, a second web page containing a counter in the middle of the screen, with two buttons to count a shown value up or down.
- style.css, the style for every page on the cite. The color scheme should be a simple and grayscale, but not too dark
- functionality.js, a javascript program that handles the functionality of the page, such as the counter in counter.html

The page should contain simple navigation: The homescreen can navigate to the counter, the counter can navigate back to the homescreen

Add a title bar to the page that stays consistent across both html scripts. It should have the title "Count!"

Lastly, please make the website appear modern. Make sure text sizing looks good and give me all of the scripts listed with their given parameters.
```

### DockerHub Repository for the Website
---
`https://hub.docker.com/repository/docker/nfairweather93/count-up/general`

## Docker Image and Website running on LocalHost (LocalRun Screenshots)

**`docker ps` running the docker image provided at my repository listed above.**
![Docker ps](./Images/Docker-ps-proof.png)

**Both HTML webpages running on `localhost:8080`** 
![First webpage](./Images/Website1.png)
![Second Webpage](./Images/Website2.png)

### Purpose of web-content items
---
- [index.html](./web-content/index.html) is the landing page of the website, with a simple button to move the page to [counter.html](./web-content/counter.html)
- [counter.html](./web-content/counter.html) is the second page of the site. It has a number in the middle that can be incremented up or down, one at a time. Also, there is a label to move back to the home screen.
- [functionality.js](./web-content/functionality.js) is a javascript file used to control the buttons in counter.html so that they actually increment the number on the page.
- [style.css](./web-content/style.css) is the style for both of the html pages (colors, fonts, margins, etc...)
- [Dockerfile](./web-content/Dockerfile) helps build the Docker Image. It serves two purposes:
    - `FROM httpd:2.4` to start the apache web server image
    - `COPY . /usr/local/apache2/htdocs/` to take everything in the current folder (which should be web-content) and put it in Apache's root inside of the created image, which should make those files run (clearly bc I can see it running).

### How to get it running
---
The Docker Image is stored in this repository:
`https://hub.docker.com/repository/docker/nfairweather93/count-up/general`

With that, starting it was really easy.
- Pull the image:
    - `docker pull nfairweather93/count-up:latest`
- Start the image:
    - `docker run -d --name count-up -p 8080:80 nfairweather93/count-up:latest`
- Verify it is running:
    - `docker ps`
- Check for the site on the correct port:
    - http://localhost:8080

# Part 2 - GitHub Actions and DockerHub

# Part 3 - Semantic Versioning

# Extra stuff that needs to be in here so I don't forget it and don't know where it goes yet

## Images
- [ ] Repository secrets - your repository's Actions secrets page showing `DOCKER_USERNAME` and `DOCKER_TOKEN`. Secret values are not displayed, never show or commit them.
- [ ] Main Trigger - A successful workflow run from a push to `main`, with the commit SHA visible.
- [ ] Branch Negative Test - Push a commit to a branch other than `main`, and show the commit on that branch and that no workflow run started
- [ ] Change to image - change visible text on your site and push it to `main`. After the workflow succeeds, pull and run the new image and show the change in a browser.
- [ ] Tag trigger - `git tag -l` output, and a successful workflow run with a tag as its event.
- [ ] Tag negative test - push a commit without a tag, and show the commit and that no workflow run started.
- [ ] Tag set - your DockerHub repo's tags showing `latest`, `major`, and `major.minor`.
- [ ] Two Releases - After your second release, your DockerHub tags and digests showing that 1 and latest moved to the new image while 1.0 stayed on the old image.
- [ ] Rollback - run containers from your `major.minor` tags and show in a browser that each server its version of the site.