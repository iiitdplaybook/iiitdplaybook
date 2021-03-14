# Footer

Find the documentation for the footer code in this file.

- The functional component `Footer` takes a string argument `page`. This is because the appearance of the footer is different on the Login page from the rest of the pages.
- If `localStorage.getItem('isSignedIn') === true`, i.e. the user is signed in, the Contribute button is displayed which redirects to the Contributions page. This is not shown on the login page since `localStorage.getItem('isSignedIn') === false`
- A 'Buy me a coffee' button is displayed which redirects to [buymeacoffee.com](https://www.buymeacoffee.com/iiitdplaybook).

### Creators

**Note:** The code for the creator cards can be found in `Creators.js`.

- The details about all the creators are stored in the Real Time Database on Firebase. These are stored in state variable `creatorData`.
- The method `fetchCreatorData()` is used to fetch the data from the database.
- `setCreatorData()` is called in the `useEffect` hook to set the value of `creatorData` as the value returned by `fetchCreatorData()`.
- Each creator card is displayed in a div with `className='creatorCard'` having the image, name, subtitle 'Creator' and a linkedin icon (fontawesome).
- The `<a className='defaultClick'>` is for redirecting the click on the creator card to the `defaultLink` stored in `creatorData`

### Team

**Note:** The code for the creator cards can be found in `Team.js`.

- The details about all the team members are stored in the Real Time Database on Firebase. These are stored in state variable `memberData`.
- The method `fetchMemberData()` is used to fetch the data from the database.
- `setMemberData()` is called in the `useEffect` hook to set the value of `memberData` as the value returned by `fetchMemberData()`.
- The `Marquee` component from [`react-marquee-slider`](https://github.com/mxmzb/react-marquee-slider) is used to display the member cards in a marquee.
- Each member card is displayed in a div with `className='memberCard'` having the image, name, team name and a linkedin icon (fontawesome).
- The `<a className='defaultClick'>` is for redirecting the click on the member card to the `defaultLink` stored in `memberData`
