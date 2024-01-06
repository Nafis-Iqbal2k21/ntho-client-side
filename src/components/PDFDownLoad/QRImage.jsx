import QRCode from "qrcode";
import { Image } from "@react-pdf/renderer";

export function QRImage({url}) {
  const urlPromise = QRCode.toDataURL(url);
  return <Image src={urlPromise} />;
}
