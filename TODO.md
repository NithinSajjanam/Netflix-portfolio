# TODO: Fix GraphQL 401 Error in Profile Banner

## Tasks
- [x] Modify `src/queries/getDatoCmsToken.ts` to throw an error if the DatoCMS token is missing or empty, with instructions to set environment variables.
- [x] Add error handling in `src/profilePage/ProfileBanner.tsx` to catch GraphQL errors and display a user-friendly message.
- [x] Update `README.md` to include instructions for setting up DatoCMS API tokens in environment variables.
- [x] Make `getDatoCmsToken` async and update `datoCMSClient.ts` to return a Promise<GraphQLClient>.
- [x] Update all query functions to await the client.
- [x] Add error handling in `src/pages/Skills.tsx` to catch errors.

## Followup Steps
- [x] Create a `.env` file in the project root with the required REACT_APP_DATOCMS_*_TOKEN variables set to valid DatoCMS API tokens.
- [ ] Restart the development server after setting environment variables.
- [ ] Test the ProfileBanner component to ensure it loads data correctly or shows error message gracefully.
- [ ] Add error handling to other pages that use query functions (Projects, Certifications, etc.).
