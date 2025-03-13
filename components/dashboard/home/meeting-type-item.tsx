import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

interface MeetingTypeItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  dialog: React.ReactNode | null;
}

export default function MeetingTypeItem({
  title,
  description,
  icon,
  dialog,
}: MeetingTypeItemProps) {
  const router = useRouter();

  const content = (
    <Card className="h-[200px] flex flex-col justify-between text-left">
      <CardHeader>
        <div className="bg-slate-800 p-3 w-fit rounded-lg">{icon}</div>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardContent>
    </Card>
  );

  return dialog ? (
    <Dialog>
      <DialogTrigger className="cursor-pointer">{content}</DialogTrigger>
      {dialog}
    </Dialog>
  ) : (
    <div
      className="cursor-pointer"
      onClick={() => {
        router.push("/recordings");
      }}
    >
      {content}
    </div>
  );
}
