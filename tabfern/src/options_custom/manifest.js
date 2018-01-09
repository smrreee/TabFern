// manifest.js: Settings for TabFern
// TODO move the names into constants in common.js
// Note: the tabs and groups are created in the order they
// first appear in the manifest.
(function(root){
    // Shortcuts for frequently-used items
    function icon(cls) { return `<i class="${cls}"></i>`; }
    function issue(num) { return `(<a href="https://github.com/cxw42/TabFern/issues/${num|0}">#${num|0}</a>)`; }
    function brplain(date_str){return `<br/><span class="plain">${date_str}</span>`;}

    let ham = icon('fa fa-bars');
    let gt = icon('fa fa-lg fa-caret-right');
    let settings = `${ham} ${gt} Settings ${gt}`;
    let refresh_message = " (refresh the TabFern window after you change this to make the change take effect)"

// Settings {{{2
    // Assign the settings
    root.manifest = {
        "name": "Settings - ver. "+TABFERN_VERSION+' - TabFern',
        "icon": "/assets/fern16.png",
        "settings": [

            // Welcome page
            {
                "tab": i18n.get("Welcome / Help"),
                "group": i18n.get("Introduction"),
                "name": "welcome-intro",
                "type": "description",
                "text": "<p>Welcome to TabFern!  Each Chrome window you have open "+
                        "or saved is represented in the TabFern window.  "+
                        "Right-click on those representations or hover " +
                        "the mouse over them for options.  Click the " +
                        ham + ' menu for more options.</p>' +
                        '<p>The tabs at the left have settings and, at the bottom'+
                        ' of the list, information about recent feature additions'+
                        ' or changes.</p>'
            },

            // Behaviour.  Yeah, there's a "u" in there!
            {
                "tab": i18n.get("Behaviour"),
                "group": i18n.get("On startup or refresh..."),
                "name": CFG_COLLAPSE_ON_STARTUP,
                "type": "checkbox",
                "label": i18n.get("Collapse all the saved trees"),
                //"text": i18n.get("x-characters")
            },
            {
                "tab": i18n.get("Behaviour"),
                "group": i18n.get("On startup or refresh..."),
                "name": CFG_OPEN_TOP_ON_STARTUP,
                "type": "checkbox",
                "label": i18n.get("Sort open windows to the top")
                //"text": i18n.get("x-characters")
            },

            {
                "tab": i18n.get("Behaviour"),
                "group": i18n.get("When I..."),
                "name": "collapse-tree-on-window-close",
                "type": "checkbox",
                "label": i18n.get("Close a window, collapse its tree"),
                //"text": i18n.get("x-characters")
            },
            {
                "tab": i18n.get("Behaviour"),
                "group": i18n.get("When I..."),
                "name": CFG_RESTORE_ON_LAST_DELETED,
                "type": "checkbox",
                "label": i18n.get("Restore the last-deleted window, reopen its tabs"),
            },
            {
                "tab": i18n.get("Behaviour"),
                "group": i18n.get("When I..."),
                "name": CFG_JUMP_WITH_SORT_OPEN_TOP,
                "type": "checkbox",
                "label": i18n.get('Sort open windows to the top, scroll to the top of the list'),
            },
            {
                "tab": i18n.get("Behaviour"),
                "group": i18n.get("When I..."),
                "name": CFG_NEW_WINS_AT_TOP,
                "type": "checkbox",
                "label": i18n.get('Open a new window, move it to the top of the list'),
            },
            {   // some extra descriptive text for CFG_NEW_WINS_AT_TOP
                "tab": i18n.get("Behaviour"),
                "group": i18n.get("When I..."),
                "type": "description",
                "text": `This has the practical side-effect that all open
                        windows will be sorted to the top when you open the
                        TabFern window, even if you didn't check the "Sort
                        open windows" box above.`
            },

            {
                "tab": i18n.get("Behaviour"),
                "group": i18n.get("Deleting windows"),
                "name": CFG_CONFIRM_DEL_OF_SAVED,
                "type": "checkbox",
                "label": i18n.get('Prompt for confirmation before deleting <b>saved</b> windows'),
            },
            {
                "tab": i18n.get("Behaviour"),
                "group": i18n.get("Deleting windows"),
                "name": CFG_CONFIRM_DEL_OF_UNSAVED,
                "type": "checkbox",
                "label": i18n.get('Prompt for confirmation before deleting <b>unsaved</b> windows'),
            },
            {
                "tab": i18n.get("Behaviour"),
                "group": i18n.get("Deleting tabs"),
                "name": CFG_CONFIRM_DEL_OF_SAVED_TABS,
                "type": "checkbox",
                "label": i18n.get('Prompt for confirmation before deleting <b>saved</b> tabs'),
            },
            {
                "tab": i18n.get("Behaviour"),
                "group": i18n.get("Deleting tabs"),
                "name": CFG_CONFIRM_DEL_OF_UNSAVED_TABS,
                "type": "checkbox",
                "label": i18n.get('Prompt for confirmation before deleting <b>unsaved</b> tabs'),
            },

            // Appearance
            {
                "tab": i18n.get("Appearance"),
                "group": i18n.get("Scrollbars"),
                "name": CFG_HIDE_HORIZONTAL_SCROLLBARS,
                "type": "checkbox",
                "label": i18n.get('Hide horizontal scrollbar'),
            },
            {
                "tab": i18n.get("Appearance"),
                "group": i18n.get("Scrollbars"),
                "name": CFG_SKINNY_SCROLLBARS,
                "type": "checkbox",
                "label": i18n.get('Skinny scrollbars'),
            },
            {
                "tab": i18n.get("Appearance"),
                "group": i18n.get("Scrollbars"),
                "id": 'scrollbar-color-picker-label',
                //"name": '',     // Don't save - settings.js handles that
                "type": "text",
                //"text": i18n.get('Skinny-scrollbar color: '),
                    // placeholder - settings.js adds the actual control
                    // after this.
            },
            {
                "tab": i18n.get("Appearance"),
                "group": i18n.get("Scrollbars"),
                "type": "description",
                "text": i18n.get("Refresh the TabFern window to apply changes to these options."),
            },
            // Maybe add some theming options here?
            {
                "tab": i18n.get("Appearance"),
                "group": i18n.get("Tree"),
                "name": CFG_SHOW_TREE_LINES,
                "type": "checkbox",
                "label": i18n.get('Show connecting lines between nodes' + refresh_message),
            },
            {
                "tab": i18n.get("Appearance"),
                "group": i18n.get("Theme"),
                "name": CFGS_THEME_NAME,
                "type": "popupButton",
                "label": i18n.get('Theme'),
                'options': [
                    { value: 'default-dark', text: 'Dark' },
                    { value: 'default', text: 'Light' },
                ],
            },
            {
                "tab": i18n.get("Appearance"),
                "group": i18n.get("Theme"),
                "name": CFGS_BACKGROUND,
                "type": "text",
                "label": i18n.get('Background color or image'),
            },
            {
                "tab": i18n.get("Appearance"),
                "group": i18n.get("Theme"),
                "type": "description",
                "text":
`${refresh_message}<br/>
The background can be specified as a CSS color name, rgb(r,g,b), hsl(h,s,l),
or a URL (data, https, chrome-extension, or file).
To use images from your local disk (file):
<ul>
<li>Check the box for "Allow access to file URLs" in chrome://extensions</li>
<li>Open the image you want in Chrome and copy the address out of the address
bar (it will start with "file://")</li>
<li>Paste the "file://..." URL into the box above.</li>`
            },

            // Features
            {
                "tab": "Features",
                "group": "Context Menu",
                "name": CFG_ENB_CONTEXT_MENU,
                "type": "checkbox",
                "label": "Enable right-click menus" + refresh_message,
            },
            {
                "tab": "Features",
                "group": "Key Mapping",
                "name": "KeyBinds.Enabled",
                "type": "checkbox",
                "label": "Enable key mapping" + refresh_message,
            },

            {
                "tab": "Key Mappings",
                "group": "Persistence Control",
                "name": "KeyMappings.PersistenceControl.SaveButton",
                "type": "button",
                "text": "Save"
            },
            {
                "tab": "Key Mappings",
                "group": "Persistence Control",
                "name": "KeyMappings.PersistenceControl.RevertButton",
                "type": "button",
                "text": "Revert"
            },

            // Key Mappings.
            // TODO Generate these from code.
            {
                "tab": "Key Mappings",
                "group": "Key Bindings",
                "name": "KeyMappings.KeyBinds.IgnoreContextMenu.KeyBind",
                "type": "text",
                "text": "IgnoreContextMenu"
            },
            {
                "tab": "Key Mappings",
                "group": "Key Bindings",
                "name": "KeyMappings.KeyBinds.IgnoreContextMenu.ClearButton",
                "type": "button",
                "text": "Clear"
            },
            {
                "tab": "Key Mappings",
                "group": "Key Bindings",
                "name": "KeyMappings.KeyBinds.IgnoreContextMenu.EnterBindModeButton",
                "type": "button",
                "text": "Bind"
            },
            {
                "tab": "Key Mappings",
                "group": "Key Bindings",
                "name": "KeyMappings.KeyBinds.IgnoreContextMenu.AdditionalBindButton",
                "type": "button",
                "text": "X or + or don't show when these are dynamic"
            },

// }}}2
            // Changelog                                          {{{1
            {
                "tab": i18n.get("What's new?"),
                "group": `Version 0.1.14${brplain('201x-xx-xx')}`,
                'group_html':true,
                "type": "description",
                "text":
`<ul>
<li class="gold-star">TabFern now has more than 100 users!  Wow!
You folks are fantastic!</li>
<li>You can change the color of the narrow scrollbar to something other
than yellow: ${settings} Appearance ${gt} Scrollbars ${gt} Skinny-scrollbar color.
${issue(97)}</li>
</ul>`,
            },
            {
                "tab": i18n.get("What's new?"),
                "group": `Version 0.1.13${brplain('2017-12-12')}`,
                'group_html':true,
                "type": "description",
                "text":
`<ul>
<li>The delete-confirmation dialog now takes keyboard shortcuts (y, n, c),
and provides an option to not ask again.  You can always re-enable
confirmation dialogs from ${settings} Behaviour.
${issue(85)}</li>
<li>You can now specify a custom color or background for the TabFern window.
Go to ${settings} Appearance ${gt} Theme, and put a
<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value">CSS color</a> or an image URL in the "Background color or image" box.
${issue(86)}</li>
<li>Going along with the custom backgrounds, you can also select a light
theme (dark text, light backgrounds) from
${settings} Appearance ${gt} Theme.  ${issue(89)}
<li>You can use skinny scrollbars to make more text visible in the TabFern
window.  Go to ${settings} Appearance ${gt} Scrollbars, and check "Skinny
scrollbars."  ${issue(68)}
</ul>`
            },
            {
                "tab": i18n.get("What's new?"),
                "group": `Version 0.1.12${brplain('2017-11-05')}`,
                'group_html':true,
                "type": "description",
                "text":
`<ul><li class="gold-star">TabFern now has more than 60 users!  Thank you for
using TabFern, and for spreading the word!  I also appreciate those of you
that have contributed through GitHub, sent me an email, left a
review, or otherwise let me know what you think of TabFern or would like to
see in future versions.</li></ul>
<ul>
<li>You can now right-click on the TabFern icon in the Chrome toolbar,
and select "Add/edit a note for the current tab."  That will switch you to the
TabFern window, where you can edit the note, and then will switch you right
back to your tab.  Just click Cancel (or press Escape)
if you want to see the note, but not
change it.  If the TabFern window is offscreen, double-click the TabFern
icon first to bring it to the current window.  ${issue(71)}</li>
<li>On the "Behaviour" tab, you now have the option of telling TabFern to
ask you for confirmation before it deletes a window from the tree.
This does not change what happens when you close a browser window outside
of the TabFern tree.  ${issue(48)}</li>
<li>Faster vertical scrolling!  ${issue(73)}</li>
<li>Sorting open windows to top keeps the order of closed windows as it is.
${issue(78)}</li>
<li>Other fixes: ${issue(72)}</li>
</ul>`
            },
            {
                "tab": i18n.get("What's new?"),
                "group": `Version 0.1.11${brplain('2017-10-19')}`,
                'group_html':true,
                "type": "description",
                "text":
`
<ul>
<li>You can now drag individual tabs in the tree between open and closed
windows!  When you drag a tab to a closed window,
the tab will close.  It will be available when
you open that closed window, though.  ${issue(36)}
</li>
<li>On the right-click menu for a window, there is now a "Remember" option
(${icon('fa fa-link')})
to mark a window to be saved.  Previously you had to add a note or a border,
or close the window &mdash; now you don't have to do any of those.</li>
<li>On the Appearance tab, you can turn on and off connecting lines
between the nodes in the tree.  ${issue(65)}</li>
<li>If you forget a window that has notes on some of the tabs, those notes will
be shown in red to remind you that they will be gone if you don't save
the window.  A small thing, but I hope it helps!</li>
</ul>
<p>Would you be willing to run a pre-release version?  You would get the
new features about a week earlier that way&nbsp;:)&nbsp;.  If so, please
<a href="mailto:tabfern@zoho.com">send me a note</a> or ping me
<a href="https://github.com/cxw42">on GitHub</a>.  The only requirements are
a <a href="https://github.com/join">free GitHub account</a> and the willingness
to <a href="https://github.com/cxw42/TabFern/issues/new">report issues</a>
if you run across them.  Thanks for considering this request!
</p>`,
            },

            {
                "tab": i18n.get("What's new?"),
                "group": `Version 0.1.10${brplain('2017-09-26')}`,
                'group_html':true,
                "type": "description",
                "text":
`
<ul>
<li class="gold-star">TabFern now has more than 25 users!  Thank you for being
one of them!</li>
<li>You can drag and drop tabs between open windows from the TabFern tree.
(Drag-and-drop between open windows and closed windows is still in the works.)
${issue(36)}</li>
<li>On the "Appearance" tab, you can turn off the horizontal scrollbar to
save a bit of vertical space.  ${issue(38)}</li>
<li>New options on the Behaviour tab to keep your open windows at the top
of the list.  This may reduce the need for scrolling.</li>
<li>PDFs without a favicon now show as
${icon('fff-page-white-with-red-banner')}.  My use case involves a lot of
locally-stored PDFs, and this helps me find them more quickly.</li>
</ul>`,
            },
            {
                "tab": i18n.get("What's new?"),
                "group": `Versions 0.1.8 and 0.1.9${brplain('2017-09-22')}`,
                'group_html':true,
                "type": "description",
                "text":
`<ul>
<li>You can right-click a tab to give it a top border.  This lets you
visually separate tabs in the tree at any point.  ${issue(56)}</li>
<li>You can also right-click a tab or press ${icon('fff-pencil')}
to add a note to yourself!
The note will be displayed on the tab's item in the tree.
Notes are saved with the tree, so your notes will stick around
as long as you want.  ${issue(57)}</li>
<li>Sorting open windows to the top, to make it easier to find them!
${ham} ${gt} Sort ${gt} ${icon('fff-text-padding-top')}</li>
<li>You can now drag and drop tabs in the tree within and between closed
windows.  ${issue(36)}</li>
<li>You can also drag and drop open tabs within an open window to
rearrange them.  (Drag-and-drop between open windows is coming soon, but not
ready yet.)  ${issue(36)}</li>
</ul>`,
            },
            {
                "tab": i18n.get("What's new?"),
                "group": `Version 0.1.7${brplain('2017-09-18')}`,
                'group_html':true,
                "type": "description",
                "text":
    '<ul>' +
    '<li>Numeric sort order options (on the '+ham+' '+gt+' Sort menu)  ' +
    issue(43) +
    '</li>'+
    '<li>"Restore last deleted" option on the '+ham+' menu  ' +
    issue(30) + '</li>'+
    '<li>To close the '+ham+' menu without the keyboard, move the mouse off of it for a second or two</li>'+
    '<li>Improvements under the hood for robustness</li>'+
    '</ul>'
            },
            {
                "tab": i18n.get("What's new?"),
                "group": `Version 0.1.6${brplain('2017-09-10')}`,
                'group_html':true,
                "type": "description",
                "text":
    '<ul>' +
    '<li>Sorting list by window name (on the '+ham+' '+gt+' Sort menu)  '+
    issue(43) + '</li>'+
    '<li>You can now drag and drop windows to rearrange them in the tree!  '
    +issue(36) + '</li>'+
    '</ul>'
            },
            {
                "tab": i18n.get("What's new?"),
                "group": `Version 0.1.5${brplain('2017-09-07')}`,
                'group_html':true,
                "type": "description",
                "text": "You can now right-click on a saved window and choose "+
                    '"Forget" to leave the window as open, but not save it '+
                    'for next time.  Also includes some bug fixes, including '+
                    'workarounds for Chrome 61 changes.'
            },
            {
                "tab": i18n.get("What's new?"),
                "group": `Version 0.1.4${brplain('2017-09-06')}`,
                'group_html':true,
                "type": "description",
                "text":
`Added context menus ${issue(6)},
saving of TabFern window position ${issue(22)},
and Expand All/Collapse All.`
            },
            {
                "tab": i18n.get("What's new?"),
                "group": `Version 0.1.2${brplain('2017-09-02')}`,
                'group_html':true,
                "type": "description",
                "text": "First version released to the Chrome Web Store"
            }                                                     // }}}1
        ]
    };
})(this);
// vi: set ts=4 sts=4 sw=4 et ai foldmethod=marker foldenable foldlevel=1: //
