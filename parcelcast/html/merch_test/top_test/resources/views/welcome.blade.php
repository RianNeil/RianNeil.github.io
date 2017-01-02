<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>

        <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">

        <style>
            html, body {
                height: 100%;
            }

            body {
                margin: 0;
                padding: 0;
                width: 100%;
                display: table;
                font-weight: 100;
                font-family: 'Lato';
            }

            .container {
                text-align: center;
                display: table-cell;
                vertical-align: middle;
            }

            .content {
                text-align: center;
                display: inline-block;
            }

            .title {
                font-size: 96px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="content">
                <div class="title">Laravel 5</div>
                <form method="PUT" action="{{url('/')}}/api/user/6">
                    <input type="text" name="email" />
                    <input type="password" name="password" />
                    <input type="text" name="firstname" />
                    <input type="text" name="lastname" />
                    <input type="text" name="role" /
                
                </form>
            </div>
        </div>
    </body>
</html>
