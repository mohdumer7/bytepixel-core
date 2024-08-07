"use client";
import React, { useEffect, useState } from "react";

import { toast } from "react-hot-toast";
import { redirect } from "next/navigation";
import {MeetingComponent} from "../../../app/components/Admin/Meetings/MeetingComponent";

type Props = {};

const CreateMeeting = (props: Props) => {

    // const handleCreateMeet = async () => {
    //     const res = await fetch('/api/create-meeting', {
    //         method: 'POST',
    //     });
    //
    //     const data = await res.json();
    //     if (data.error) {
    //         alert(`Error: ${data.error}`);
    //     } else {
    //         alert('Google Meet event created!');
    //     }
    // };

    return (
        <div>
               <MeetingComponent/>
        </div>
    );
};

export default CreateMeeting;
