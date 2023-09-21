<?php

namespace App\Http\Controllers;

use App\Mail\WelcomeEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function sendMail(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'email' => 'required|email'
        ]);
        $email = $data['email'];

        $body = [
            'name' => $data['name'],
            'url' => 'https://www.digicom-techno.com/',
        ];

        Mail::to($email)->send(new WelcomeEmail($body));
        return back()->with('status', 'Mail sent successfully');;
    }
}
