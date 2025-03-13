import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function CreateMeetingDialog() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="text-center text-2xl">
          Start an Instant Meeting
        </DialogTitle>
        <DialogDescription className="text-center">
          Anyone who has a link can join the meeting.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter className="sm:justify-center">
        <Button type="submit" className="w-full">
          Start Meeting
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}
