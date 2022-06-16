import React from 'react';
import { InputLabel, Select, MenuItem, Typography, Pagination, Stack } from '@mui/material';
import './niceposts.scss';

const NicePosts = () => {
    // const [age, setAge] = React.useState('');

    // const handleChange = (event) => {
    //     setAge(event.target.value);
    // };
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    return (
        <div className="niceposts">
            <div>
                <select>
                    <option>Danh sách bài viết</option>
                </select>
                <Stack spacing={2}>
                    <Typography>Page: {page}</Typography>
                    <Pagination sx={{ fontSize: '2rem' }} count={10} page={page} onChange={handleChange} />
                </Stack>
                {/* <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select> */}
            </div>
        </div>
    );
};

export default NicePosts;
