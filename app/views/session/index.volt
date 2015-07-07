
{{ content() }}

<div class="row">

    <div class="col-md-6">
        <div class="page-header">
            <h2>登录</h2>
        </div>
        {{ form('session/start', 'role': 'form') }}
            <fieldset>
                <div class="form-group">
                    <label for="email">用户名/注册邮箱</label>
                    <div class="controls">
                        {{ text_field('email', 'class': "form-control",'placeholder':'请输入您的用户名/注册邮箱') }}
                    </div>
                </div>
                <div class="form-group">
                    <label for="password">密码</label>
                    <div class="controls">
                        {{ password_field('password', 'class': "form-control",'placeholder':'请输入密码') }}
                    </div>
                </div>
                <div class="form-group">
                    {{ submit_button('登录', 'class': 'btn btn-primary btn-large') }}
                </div>
            </fieldset>
        </form>
    </div>

    <div class="col-md-6">

        <div class="page-header">
            <h2>还没有账号吗？</h2>
        </div>

        <p>创建一个帐户提供了以下优点：</p>
        <ul>
            <li>创建，跟踪和在线出口发票</li>
            <li>获得关键洞察到你的生意怎么做</li>
            <li>随时了解促销活动和优惠套餐</li>
        </ul>

        <div class="clearfix center">
            {{ link_to('register', '注册', 'class': 'btn btn-primary btn-large btn-success') }}
        </div>
    </div>

</div>
