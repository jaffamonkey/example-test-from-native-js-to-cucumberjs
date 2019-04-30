# Are you ready to work from the CLI?

For the specific course, an IDE (Integrated Development Environment) is not necessary, but an IDE is standard tool of anyone in tech.

Also in many ways, it is a lot quicker to do basic git operations from the CLI (Command Line Interface), but there is GitHub deskptop software you can use.

First download a free code editor, like Visual Studo Code.

In order to securely and more easily clone repos from your machine, you need to add an SSH key to GitHub, so GitHub know you are on an authorised machine.

This is easy, as all you have to do is run the following line, then copy 'n paste the output into a GitHub form field.

Open up your Terminal program, and from any directory run the command line below. Just press <RETURN> with each option to take the default options.

```
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

Now you need to copy the contents of the public key file. This maps to your private key file.

```
head ~/.ssh/id_rsa.pub 
```

Then copy and paste the content from screen, ready to paste

Assuming you hve installed Git for Windows, open up the GitBash program which will open up CLI window.
