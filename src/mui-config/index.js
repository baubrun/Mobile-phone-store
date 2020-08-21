import {
    createMuiTheme
} from '@material-ui/core/styles';
import {
    makeStyles
} from "@material-ui/core/styles";

export const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#4fb3bf',
            main: '#00838f',
            dark: '#005662',
            contrastText: '#fff',
        },
    },
    typography: {
        fontFamily: [
            'Oswald',
            'sans-serif',
        ].join(','),
    },
});


export const titleStyle = makeStyles({
    sectionTitle: {
        fontFamily: [
            'Permanent Marker',
            'cursive',
        ].join(','),
    }
})

