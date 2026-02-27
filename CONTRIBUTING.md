# How do i add a script to the cdn?
1. Create your script locally and test it. Document your code using JSDoc
2. Create a documentation file in /docs/modules/. Please refrain from adding custom styles, use customizeIframe.html as a guide.
3. Add your script file to the root of this application. If you've created a library, make sure to add it in its own folder.
4. Please keep the commit messages sensible!
That's all!

After you push to github, the cloudflare pages runner will automatically build index.json and deploy it to cdn.marticom.ch. No need to worry about adding it to the navigation menu, this will happen automatically.

Cheers.