# Documentation

<br>

## Useful Links
* [Jira](https://jrsmiffy.atlassian.net/jira/software/projects/DBLE/boards/2)

<br>

## Technical Notes

### double-webapp
* Versions:
    * Angular: `15.0.4`
    * Node: `18.12.1`
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
* GitHub Actions:
  * There is a workflow on the `main` branch that:
    * Runs the Cypress test suite
    * Builds and Deploys the Angular app to GitHub Pages
