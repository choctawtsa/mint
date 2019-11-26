# Mint Electric

## Challenge
Each year, TSA puts out a theme for Webmaster competitors to address in a website; this year, that theme was "Embracing Electric Vehicles." So, that's what our site is: a solution to the problem presented.

## Powerful tools
This site isn't like a lot of other sites made for the Webmaster competition. That includes our own chapter site. For our design brief solution, we wanted to go all out. That's why we used some of the most advanced web technologies used for frontend web development, and not the Bootstrap and static HTML stack typically used by TSA competitors.

### Vue.js
Our website was built with the frontend JavaScript framework [Vue.js](https://github.com/vuejs/vue) ([vuejs.org](https://vuejs.org)).

The decision to use Vue was really just to get used to technologies that are actually used in the industry. While we did use Vue to build are site and got some good use out of it, we definitely didn't use it to its full potential. A technology like Vue isn't mastered quickly, especially by high school students that already have limited time because this isn't our career yet.

Next year, we're hoping to make better use of Vue, but that depends on whether the theme warrants extended Vue functionality.

### CSS Technologies
CSS is one of the most intrinsic parts of web development. As such, we spent a lot of time figuring out how we were going to move forward with it.

What we finally settled on was a CSS stack consisting of [Tailwind CSS](https://github.com/tailwindcss/tailwindcss), [PurgeCSS](https://github.com/FullHuman/purgecss), and [Autoprefixer](https://github.com/postcss/autoprefixer).

#### [Tailwind CSS](https://tailwindcss.com)
Tailwind CSS is a utility framework that makes developing much easier. Instead of having to check Bootstrap's docs, find a component that fits your needs well enough, and then having to fight with Bootstrap's predetermined styles to customize the component, we chose Tailwind. Tailwind allows you to create everything yourself, without having to write any CSS (well, you can write CSS if you really need to, but those occasions are few and far between). It's difficult to explain exactly what Tailwind offers through a write-up like this, so we'd recommend checking it out at [tailwindcss.com](https://tailwindcss.com); or, you can check out its [GitHub repository](https://github.com/tailwindcss/tailwindcss).

#### [PurgeCSS](https://www.purgecss.com) and [Autoprefixer](https://github.com/postcss/autoprefixer)
The need for these two utilities stems mainly from the use of Tailwind CSS, though PurgeCSS could be immensely helpful with a framework like Bootstrap, too.

PurgeCSS is a tool that looks through your HTML files, sees what classes you're using, and then removes whatever classes aren't used in the CSS at build time. PurgeCSS reduces the filesize of our HTML down from 993kb (minified) to _only 12.2kb_ (also minified). That's only 1.2% of the original file size. Tailwind CSS isn't actually just below 1MB minified; in reality, it's 603.3kb. The reason for the extra ~400kb is the customizations we've done to Tailwind. We've added two breakpoints, as well as some spacing classes that we felt needed to be added. Those two things can vastly increase the size of Tailwind, but PurgeCSS is there to strip out everything that we don't need.



# More needs to be added to this README
