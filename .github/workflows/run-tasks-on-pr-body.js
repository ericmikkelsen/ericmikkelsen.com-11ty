/**
 * 
 * @param {string} markdown 
 * @returns {array}
 * @link https://davidwells.io/snippets/regex-match-markdown-links
 */
const getLinksFromMarkdown = markdown => {
    // regex to get all links from markdown as strings in an array
    const regexMdLinks = /\[([^\[]+)\](\(.*\))/gm
    const matches = markdown.match(regexMdLinks)
    // regex to break a single markdown link into an array
    // consisting of the text then the url
    const singleMatch = /\[([^\[]+)\]\((.*)\)/
    const links = matches.map( link => {
        const text = singleMatch.exec(link)
        // convert array to an object with well named keyss
        return { 
            text: text[1], 
            url: text[2] 
        }
    })
    return links
}
const runTasksOnPRBody = markdown => {
    const links = getLinksFromMarkdown(markdown)
    console.log(links)
    return links
}
module.exports = {runTasksOnPRBody,getLinksFromMarkdown}
