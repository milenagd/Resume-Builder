import React from 'react';
import { v4 as uuid } from 'uuid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    resumeInterests: {
        padding: '10px 0',
        borderBottom: '1px solid #ddd',
    },
    interests: {
        margin: '0',
        padding: '0',
        listStyle: 'none',
        '& li': { margin: '0 0 10px 0', '&:last-child': { margin: '0' } },
    },
    interest: { fontWeight: 'bold' },
    keywords: {
        margin: '0',
        padding: '0',
        display: 'flex',
        listStyle: 'none',
        '& li': {
            margin: '0 5px 0 0',
            '&:after': { content: '","' },
            '&:last-child': { '&:after': { content: '""' } },
        },
    },
}));

const Interests = ({ interests }) => {
    const classes = useStyles();
    return interests.length > 0 && (
        <div className={classes.resumeInterests}>
            <h3>Interests</h3>
            <ul className={classes.interests}>
                {interests.map((interest) => {
                    if (interest.enabled) {
                        const { name, keywords } = interest.value;
                        return (
                            <li key={uuid()}>
                                {name && name.enabled && (
                                    <p className={classes.interest}>
                                        {name.value}
                                    </p>
                                )}
                                {keywords && keywords.enabled && (
                                    <ul className={classes.keywords}>
                                        {keywords.value.map((keyword) =>
                                            keyword && keyword.enabled && (
                                                <li key={uuid()}>
                                                    {keyword.value}
                                                </li>
                                            ))}
                                    </ul>
                                )}
                            </li>
                        );
                    }

                    return null;
                })}
            </ul>
        </div>
    );
};

export default Interests;
