# Documentation

<br>

## Useful Links
* [Jira](https://jrsmiffy.atlassian.net/jira/software/projects/DBLE/boards/2)
* [Dockerhub](https://hub.docker.com/r/muntjac/double-webapp/tags)

<br>

## Technical Notes

### double-webapp
* Versions:
    * Angular: v15.0.4
    * Node: v18.12.1
* Testing:
    * Cypress
* Commands:
    * Run locally: 
        * `ng serve -e local`

### CI/CD
* Branching strategy:
    * Checkout a branch per ticket
        * Naming Convention: `DBLE-<TICKET_NUMBER>`
            * Example: `DBLE-101`
    * Perform the task, committing little and often
        * Use specific commit messages of the form:
            * `[major/minor/patch] DBLE-<TICKET_NUMBER>: task description`
                * Example: `[minor] DBLE-101: Updated header styles`
    * Raise a PR to merge the branch and assign to team member(s) for review
    * After successful review and merge, delete the remote branch
* Docker:
  * `double-webapp` is stored as an image on [Dockerhub](https://hub.docker.com/r/muntjac/double-webapp/tags)
  * Build image: `docker build -t muntjac/double-webapp ./double-webapp`
  * Push image: `docker push muntjac/double-webapp:latest`
  * Pull image: `docker pull muntjac/double-webapp:latest`
  * Start container: `docker run -d -it -p 80:80/tcp --name double-webapp muntjac/double-webapp:latest`
  * Stop container: `docker kill double-webapp`
  * Remove container: `docker rm double-webapp`
* GitHub Actions: