import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function JoinMeetingDialog() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="text-center text-2xl">
          Join an Existing Meeting
        </DialogTitle>
        <DialogDescription className="text-center">
          Anyone who has a link can join the meeting.
        </DialogDescription>
      </DialogHeader>
      <Input id="link" placeholder="Meeting Link" />
      <DialogFooter className="sm:justify-center">
        <Button type="submit" className="w-full">
          Join Meeting
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}
