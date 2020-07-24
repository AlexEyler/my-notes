const prompts = require('prompts');
const fs = require('fs').promises;

// Questions for prompts
const questions = [
    {
        type: 'text',
        name: 'title',
        message: 'Title?',
        validate: title => title ? true : 'Title is required'
    },
    {
        type: 'text',
        name: 'emoji',
        message: 'Emoji?',
        style: 'text'
    },
    {
        type: 'text',
        name: 'link',
        message: 'Link?'
    },
    {
        type: 'list',
        name: 'tag',
        message: 'Tags?'
    },
    {
        type: 'select',
        name: 'file_extension',
        message: '.md or .mdx format?',
        choices: [
            { title: ".md", value: "md" },
            { title: ".mdx", value: "mdx" }
        ]
    }
];

// Build string for the file
function build_file_contents(title, emoji, tags, link) {
    var str = `---\ntitle: ${title}\n`

    if (emoji) {
        str += `emoji:\n`
        str += `    ${emoji}\n`
    }

    if (tags) {
        str += `tags:\n`
        tags.split(",").forEach(tag => {
            str += `  - ${tag.trim()}\n`
        });
    }

    if (link) {
        str += `link: ${link}\n`
    }

    str += '---\n\n'
    return str
}

(async () => {
    // Collect metadata for new note
    cmd_args = process.argv.slice(2)
    var title, emoji, tags, link, file_extension
    if (cmd_args.length > 0) {
        title = cmd_args[0]; emoji = cmd_args[1]; tags = cmd_args[2].split(","); link=cmd_args[3]; file_extension=cmd_args[4]
    }
    else {
        const response = await prompts(questions);
        title = response.title; emoji = response.emoji; tags = response.tags; link = response.link; file_extension=response.file_extension;
    }

    // Prepare file
    var file_contents = build_file_contents(title, emoji, tags, link)
    var sanitized_title = title.toLowerCase().replace(" ", "-")

    // Write file to content file
    await fs.writeFile(`notes/${sanitized_title}.${file_extension}`, file_contents)
})();

