import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Icon from '../assets/Icon.svg';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import YearMonthPicker from './DatePicker';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 560,
        margin: 'auto',
        textAlign: 'initial',
    },
    avatar: {
        width: '64px',
        height: '64px',
    },
    margin: {
        margin: theme.spacing(2),
        width: '250px',
    },
    planColor: {
        background: '#F4F8FA',
    },
    buttonConfirm: {
        width: 320,
        height: 56,
        borderRadius: 32,
}
}));

export default function GoalCard() {
    const classes = useStyles();
    const [amount, setAmount] = React.useState('');
    const [date, setDate] = React.useState('');
    const [savings, setSavings] = React.useState('');
    const [months, setMonths] = React.useState('');
    const handleChangeAmount = (e) => {
        setAmount(e.target.value);
        const d1 = new Date();
        if (date !== '') {
            let diff = (date.getFullYear() - d1.getFullYear()) * 12;
            diff -= d1.getMonth();
            diff += date.getMonth();
            if (e.target.value !== '' && diff > 0) {
                const saveAmount = Math.ceil(Number(e.target.value) / diff);
                setMonths(diff);
                setSavings(saveAmount);
            }
        }
    }
    const dateChange = (date) => {
        setDate(date);
        const d1 = new Date();
        let diff = (date.getFullYear() - d1.getFullYear()) * 12;
        diff -= d1.getMonth();
        diff += date.getMonth();
        if (amount !== '' && diff > 0) {
            const saveAmount = Math.ceil(Number(amount) / diff);
            setMonths(diff);
            setSavings(saveAmount);
        }
    }

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar} src={Icon} />
                }
                title={
                    <Typography variant="h5" component="h2">
                        Buy a house
                    </Typography>
                }
                subheader={
                    <Typography color="textSecondary" variant="h5" >
                        Saving goal
                    </Typography>
                }
            />
            <FormControl fullWidth className={classes.margin}>
                <InputLabel htmlFor="standard-adornment-amount">Total Amount</InputLabel>
                <Input
                    id="standard-adornment-amount"
                    value={amount}
                    onChange={handleChangeAmount}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
            </FormControl>
            <YearMonthPicker dateChange={dateChange} />
            <div style={{ border: '1px black solid', margin: '24px' }}>
                <Box component="span" display="block" p={1} bgcolor="background.paper">
                    Monthly Amount: $ {savings}
                </Box>
                <Box component="span" display="block" p={1} className={classes.planColor}>
                    You’re planning {months} monthly deposits to reach your ${amount} goal.
      </Box>
            </div>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <Button variant="contained" color="primary" className={classes.buttonConfirm}>
                    Confirm
      </Button>
            </div>
        </Card>
    );
}
