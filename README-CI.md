# Nathan Fairweather

---
# Part 4 - Project Description & Diagram
---

---
# Part 1 - Create a Docker container image
---

---
# Part 2 - GitHub Actions and DockerHub
---

---
# Part 3 - Semantic Versioning
---

# Extra stuff that needs to be in here so I don't forget it and don't know where it goes yet

## Images
- [ ] Local Run - `Docker ps` showing the container running, and a browser showing both of your pages with your CSS applied.
- [ ] Repository secrets - your repository's Actions secrets page showing `DOCKER_USERNAME` and `DOCKER_TOKEN`. Secret values are not displayed, never show or commit them.
- [ ] Main Trigger - A successful workflow run from a push to `main`, with the commit SHA visible.
- [ ] Branch Negative Test - Push a commit to a branch other than `main`, and show the commit on that branch and that no workflow run started
- [ ] Change to image - change visible text on your site and push it to `main`. After the workflow succeeds, pull and run the new image and show the change in a browser.
- [ ] Tag trigger - `git tag -l` output, and a successful workflow run with a tag as its event.
- [ ] Tag negative test - push a commit without a tag, and show the commit and that no workflow run started.
- [ ] Tag set - your DockerHub repo's tags showing `latest`, `major`, and `major.minor`.
- [ ] Two Releases - After your second release, your DockerHub tags and digests showing that 1 and latest moved to the new image while 1.0 stayed on the old image.
- [ ] Rollback - run containers from your `major.minor` tags and show in a browser that each server its version of the site.