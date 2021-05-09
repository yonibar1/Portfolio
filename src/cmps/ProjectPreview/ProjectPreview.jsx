
// import { Component } from 'react'

// import './ProjectPreview.scss'

// export class ProjectPreview extends Component {

//     render() {
//         return (
//             <div>
//             </div>
//         )
//     }
// }
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        height: 420,
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 60
    },
    content: {
        flex: 1
    },
    img: {
        alignSelf: 'flex-start'
    }
});

export default function ProjectPreview({ project }) {
    const classes = useStyles();
    const hanldeClickLink = (url) => {
        window.open(url, '_blank')
    }

    return (
        <Card className={classes.root}>
            <CardActionArea className={classes.content}>
                <CardMedia
                    className={classes.img}
                    onClick={() => { hanldeClickLink(project.link) }}
                    component="img"
                    alt={project.title}
                    height="250"
                    image={project.imgURL}
                    title={project.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {project.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {project.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            {/* <CardActions>
                <Button onClick={() => { hanldeClickLink(project.link) }} size="small" variant="contained" color="dark">
                    Link
                </Button>
                <Button onClick={() => { console.log('Like') }} size="small" variant="contained" color="primary">
                    Like
                </Button>
            </CardActions> */}
        </Card>
    );
}
