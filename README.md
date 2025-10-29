
# TLDraw Browser Tab Crash Issue

A minimal reproduction of a browser tab crash issue for running Tiptap Pages in TLDraw.

## Local Development

Install dependencies with `yarn` or `npm install`.

Run the development server with `yarn dev` or `npm run dev`.

Open `http://localhost:5173/` in your browser to see the app.

## Bug Report

### Issue
The browser tab crashes almost instantly when running on localhost with no error message. The tab becomes unresponsive until closed. This issue appears to be specific to local development and may not occur (or occurs less frequently) when deployed to a real website.

### Potential Cause/Solution
After stripping down packages to create a minimal reproduction, I identified a potential fix:

```
immediatelyRender: true
```

Setting this option prevents the crash during testing. However, this workaround is not viable for the main application as it needs to be set to `false` for other package compatibility.

### Steps to Reproduce
1. Download packages and start local dev server
2. Click the "Create new shape" button
3. Interact with the document (move, write text, resize, etc).
4. Browser tab crashes (usually almost instantly, sometimes takes longer).


## Additional Context
I think TLDraw uses an internal version of Tiptap, which is outdated. However, I'm using Tiptap for multiple different purposes in my main app, most of which include several packages for later versions and it doesn't crash when using those.