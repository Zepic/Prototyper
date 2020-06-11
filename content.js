//Generating content - groups with notes, statistics, user page
function content(pageCategory, name) {
    let contentHtml = '';
    if (pageCategory == 'group') {
        contentHtml = groupPage(name);
    }
    else if (pageCategory == 'statistic') {
        contentHtml = statisticPage(name);
    }
    else if (pageCategory == 'user') {
        contentHtml = userPage(name);
    }

    return contentHtml;
}

function groupPage(groupName) {
    let groupPageHtml = '';

    //code for generating page content for groupName

    return groupPageHtml;
}

function statisticPage(statisticName) {
    let statisticPageHtml = '';

    //code for generating page content for staisticName

    return statisticPageHtml;
}

function userPage(userName) {
    let userPageHtml = '';

    //code for generating page content for userName

    return userPageHtml;
}

//sub functions for notes
function showNote(noteId) {
    let showNoteHtml = '';

    //code for generating single note

    showNoteHtml = `
        <div class="container">
            <div id="mydiv">
                <div id="mydivheader">Click here to move</div>
                <p>Move</p>
                <p>this</p>
                <p>DIV</p>
            </div>
        </div>
        `;
    return showNoteHtml;
}
