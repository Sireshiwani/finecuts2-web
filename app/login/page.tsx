import { redirect } from "next/navigation";
import { djangoUrl } from "@/lib/django-url";

/** Next has no login UI — staff auth lives on Django. */
export default function LoginPage() {
  redirect(djangoUrl("/login/"));
}
