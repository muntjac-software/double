# Documentation

<br>

## Useful Links
* [Jira](https://jrsmiffy.atlassian.net/jira/software/projects/DBLE/boards/2)

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
            * Example: `DBLE-100`
    * Raise a PR to merge the branch and assign to team member(s)
    * After successful review and merge, delete the remote branch
* TeamCity:
* Nexus: