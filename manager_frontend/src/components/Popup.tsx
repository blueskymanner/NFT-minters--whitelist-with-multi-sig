import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Zoom from "@mui/material/Zoom";
import { TransitionProps } from "@mui/material/transitions";
import QRCode from "../assets/images/QRCode.png";
import Flex from "./common/Flex";
import Image from "./common/Image";
import Btn from "./common/Button";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Zoom ref={ref} {...props} />;
});

const Popup = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) => {
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        className="popup"
      >
        <DialogTitle>
          <p className="text-white text-center">{"Scan QR Code"}</p>
        </DialogTitle>
        <DialogContent className="p-0">
          <Flex direction="row" justifyContent="center">
            <Image cssClasses={["qr-code"]} src={QRCode} width="auto" />
          </Flex>
          <Flex direction="row" justifyContent="center" cssClasses={["mt-4"]}>
            <a
              href="https://tinyurl.com/bddbmfpt"
              target="_blank"
              rel="noreferrer"
            >
              <Btn
                styles={{
                  fontSize: "16px",
                  padding: "5px 25px",
                  minWidth: "unset",
                }}
                text="Open"
                secondary
                onClick={handleClose}
              />
            </a>
          </Flex>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className="text-white">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Popup;
