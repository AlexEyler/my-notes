#!/bin/bash

# Gather input
read -p "Title? " title

tags=()
while :
do
    read -p "Tag (press enter to finish)? " tag
    if [[ -z $tag ]]; then break; fi
    tags+=($tag)
done

read -p "Emoji? " emoji
read -p "Link? " link

# Generate text
note=$'---\ntitle: '
note+=$title
note+=$'\n'
if [[ ${#tags[@]} ]]; then
    note+=$'tags:\n'
    for tag in ${tags[@]}
    do
        note+="  - $tag"
        note+=$'\n'
    done
fi

if [[ ! -z $emoji ]]; then
    note+="emoji:"
    note+=$'\n'
    note+="    $emoji"
    note+=$'\n'
fi
note+=$'---\n\n'

# Output to file
sanitized_title=$(echo "$title" | tr '[:upper:]' '[:lower:]' | sed 's/ /-/g')
echo "$note"  > "./notes/${sanitized_title}.md"