import React from "react";

let e = React.createElement;

export default class navbar extends React.Component {
    // Above enables this file to be imported into App.js
    render () { // This will clearly render the below code on our website
        return e('div',
        {class: 'container'},
        e('div',
        {class: 'row'},
        e('div',
        {class: 'col'}),
        e('div',    // Placing navbar in the middle-half of the page
        {class: 'col-8'},
        e('nav',
        {class: 'navbar navbar-expand-md bg-dark navbar-dark'},
        e('a',
        {class: 'navbar-brand'},
        'Week 13 Coding Assignment'),
        e('div',
        {class: 'collapse navbar-collapse'},  // Making navbar collapsable
            e('ul',
            {class: 'navbar-nav'},
                e('li',
                {class: 'nav-item'},
                    e('a',  // Anchoring links to the navbar
                    {class: 'nav-link'},
                    'Link 1')),
                e('li',
                {class: 'nav-item'},
                    e('a',
                    {class: 'nav-link'},
                    'Link 2')),
                e('li',
                {class: 'nav-item'},
                    e('a',
                    {class: 'nav-link'},
                    'Link 3')),    )))),
        e('div',
            {class: 'col'}),
                    ));
    }
}

