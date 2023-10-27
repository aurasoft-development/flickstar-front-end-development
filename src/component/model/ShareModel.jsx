import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import videoUrl from '../../assets/video/english_video.mp4'
import { EmailShareButton, FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CloseIcon from '@mui/icons-material/Close';
import { toast } from 'react-toastify';
import '../../assets/css/ShareModel.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 400,
    bgcolor: 'black',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    color: 'white'
};

export default function ShareModel({ videoUrl }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleCopyLink = () => {
        // Implement logic to copy the video URL to the clipboard
        navigator.clipboard.writeText(videoUrl).then(() => {
            // alert('Link copied to clipboard!');
            toast.success('Link copied to clipboard!')
        }).catch((error) => {
            toast.error('Failed to copy link:', error);
        });
    };

    return (
        <div>
            <span onClick={handleOpen}><ScreenShareIcon /></span>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='share_model_main_box' >
                    <div className='share_close_main'>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Share
                        </Typography>
                        <Typography className='cursor_pointer share_model_close_icon' onClick={() => handleClose()} >
                            <CloseIcon />
                        </Typography>
                    </div>
                    <div className='share_model_social_icon'>
                        <FacebookShareButton url={videoUrl} className='fb'>
                            <FacebookIcon fontSize='large' />
                        </FacebookShareButton>

                        <TwitterShareButton url={videoUrl} className='tw'>
                            <TwitterIcon fontSize='large' />
                        </TwitterShareButton>

                        <EmailShareButton url={videoUrl} className='email'>
                            <ForwardToInboxIcon fontSize='large' />
                        </EmailShareButton>
                        <WhatsappShareButton url={videoUrl} className='whatsapp'>
                            <WhatsAppIcon fontSize='large' />
                        </WhatsappShareButton>
                    </div>
                    <div className='share_model_copy_link cursor_pointer' onClick={handleCopyLink}>
                        Copy Link
                    </div>
                </Box>
            </Modal>
        </div>
    );
}