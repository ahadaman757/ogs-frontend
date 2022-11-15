import React, { useState } from 'react';
import { COUNTRIES } from './countries';
import './style.css';
import { WithContext as ReactTags } from 'react-tag-input';
import axios from 'axios';

// const suggestions = COUNTRIES.map((country, index) => {
//     return {
//         id: country,
//         text: country
//     };
// });

const KeyCodes = {
    comma: 188,
    enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const App = ({ setSkills }) => {
    const [suggestions, setsuggestions] = useState([])
    const [tags, setTags] = React.useState([
    ]);
    setSkills(tags)

    const handleTagChange = (e) => {
        const formdata = {
            kw: e,
            act: 'loadSkillsByKW',
            __exp: false
        }
        axios.post(`https://hiring.rozee.pk/services/job/loadSkillsByKW`, formdata, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Access-Control-Allow-Origin": "https://www.rozee.pk",
            },
        }).then(res => {
            const suggestion = res.data.skills.map((skill, index) => {
                return {
                    id: skill.id,
                    text: skill.name
                };
            });
            setsuggestions(suggestion)
        }).catch(error => {
            console.log(error)
        })

    }
    const handleDelete = i => {
        setTags(tags.filter((tag, index) => index !== i));
    };

    const handleAddition = tag => {
        setTags([...tags, tag]);
    };

    const handleDrag = (tag, currPos, newPos) => {
        const newTags = tags.slice();
        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);
        setTags(newTags);
    };

    const handleTagClick = index => {

    };

    return (
        <div className="app">
            <div>
                <ReactTags
                    tags={tags}
                    suggestions={suggestions}
                    delimiters={delimiters}
                    handleDelete={handleDelete}
                    handleAddition={handleAddition}
                    handleDrag={handleDrag}
                    handleTagClick={handleTagClick}
                    inputFieldPosition="bottom"
                    autocomplete
                    placeholder='Please Add A skill'
                    handleInputChange={handleTagChange}
                />
            </div>
        </div>
    );
};

export default App