import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import axios from 'axios';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")

    const handleRegister = async () => {
        try {
            const res = await fetch("http://localhost:3000/api/posts", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            })

            console.log(res);

        } catch (error) {

        }
    }

    return (
        <div>
            <Button onClick={handleOpen}>Login</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className="text-center">
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Đăng ký tài khoản
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <TextField value={username} onChange={e => setUsername(e.target.value)} id="outlined-basic" label="Username" variant="outlined" className="my-3" />
                        <TextField value={password} type="password" onChange={e => setPassword(e.target.value)} id="outlined-basic" label="Password" variant="outlined" className="my-3" />
                    </Typography>
                    <Button onClick={handleRegister}>Register</Button>

                </Box>
            </Modal>

        </div>
    );
}
