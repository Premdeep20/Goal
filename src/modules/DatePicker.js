import React, { useState } from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(2),
    },
}));

export default function YearMonthPicker(props) {
    const classes = useStyles();
    const [selectedDate, handleNewDateChange] = useState(new Date());

    const handleDateChange = (date) => {
        handleNewDateChange(date);
        props.dateChange(date);
    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
                variant="inline"
                openTo="year"
                views={["year", "month"]}
                label="Reach Goal by"
                value={selectedDate}
                onChange={handleDateChange}
                minDate={new Date()}
                className={classes.margin}
            />
        </MuiPickersUtilsProvider>
    );
}
