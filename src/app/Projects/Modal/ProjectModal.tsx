import './projectModal.module.css' ;
import {Dialog, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import Image from "next/image";
import {JSX} from "react";

interface ProjectModalProps{
    open: boolean;
    onClose : () => void;
    title: string;
    image: string;
    infos?: JSX.Element;
    descriptionFull: string;
    repository: string;

}

export default function ProjectModal({
                                         open,
                                         onClose,
                                         title,
                                         image,
                                         infos,
                                         descriptionFull,
                                         repository
                                     }:ProjectModalProps) {

    const style = {
        background: '#1d1f2a'
    }

    return (
        <>
            <Dialog open={open}
                    onClose={onClose}
            >
                <div className={'bg-kc p-1'}>
                    <DialogTitle style={style} className={"shadow text-center mb-1 text-white"}>
                        {title}
                    </DialogTitle>

                    <DialogContent style={style} className={'p-2 shadow text-center'}>
                        <DialogContentText className={'text-white mb-3'}>
                            {descriptionFull}
                        </DialogContentText>
                        <div style={{position: 'relative', width: '100%', height: '150px'}} className={"mb-2"}>
                            <Image
                                src={image}
                                alt={'Project image'}
                                loading={'lazy'}
                                fill
                                style={{objectFit: 'contain', borderRadius: '8px'}}
                            />
                        </div>
                    </DialogContent>

                    {infos && (
                        <DialogContent style={style} className={'p-2 mt-1 shadow overflow-x-hidden text-center'}>
                            <div className={"text-white"}>
                                {infos}
                            </div>
                        </DialogContent>
                    )}

                    {repository.trim() !== "" && (
                        <DialogContent style={style} className={'p-2 mt-1 shadow overflow-x-hidden text-center'}>

                            <h5 className={"text-white"}>Lien vers le projet</h5>

                            <a href={repository}
                               aria-label="Lien vers le repository du projet"
                               target={'_blank'}>
                                <div style={{position: 'relative', width: '100%', height: '75px'}}
                                     className={"mt-2 mb-2"}>
                                    <Image src={'/PortfolioV2/github-mark-white.svg'}
                                           alt={'Github logo'}
                                           loading={'lazy'}
                                           width='150'
                                           height='75'
                                           style={{objectFit: 'contain', borderRadius: '2px'}}
                                    />
                                </div>
                            </a>

                        </DialogContent>
                    )}

                </div>
            </Dialog>
        </>
    )
}