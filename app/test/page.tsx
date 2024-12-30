"use client"
import {Button} from "@/components/ui/button";

const Page =  () => {
    const addSkills = async () => {
        // skills.forEach(skill => {
        //     client.create({
        //         _type : "skill",
        //         ...skill
        //     }).then(res => {
        //         console.log('Document created')
        //     }).catch(e => console.error('Error while creating docs skill', e))
        // })
    }
    return (
        <Button onClick={()=> addSkills()}>
            Add skills
        </Button>
    );
};

export default Page;