import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import CreateMeeting from "@/app/components/Admin/Meetings/CreateMeeting";
import UpdateMeeting from "@/app/components/Admin/Meetings/UpdateMeeting";

export function MeetingComponent() {
    return (
        <Tabs defaultValue="Create meeting" className="w-full h-[100vh] p-8 justify-center items-center">
            <div className="h-[80vh] w-4/6 mx-auto">

            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="Create meeting">Create meeting</TabsTrigger>
                <TabsTrigger value="Update Meeting">Schedule</TabsTrigger>
            </TabsList>
            <TabsContent value="Create meeting" className="w-full">
                <Card>
                    <CardHeader>
                        <CardTitle>Create a Meeting</CardTitle>
                        <CardDescription>
                            Create a Meeting
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <CreateMeeting/>
                    </CardContent>

                </Card>
            </TabsContent>
            <TabsContent value="Update Meeting">
                <Card>
                    <CardHeader>
                        <CardTitle>Join / Update Meeting</CardTitle>
                        <CardDescription>
                            Join / Update Your Meetings here
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <UpdateMeeting/>
                    </CardContent>
                </Card>
            </TabsContent>
            </div>
        </Tabs>
    )
}
