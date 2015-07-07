
{{ content() }}

<div class="page-header">
    <h2>联系我们</h2>
</div>

<p>给我们留言，让我们知道我们如何能帮助。请尽可能描述，因为这将帮助我们更好地为您服务。</p>

{{ form('contact/send', 'role': 'form') }}
    <fieldset>
        <div class="form-group">
            {{ form.label('name') }}
            {{ form.render('name', ['class': 'form-control']) }}
        </div>
        <div class="form-group">
            {{ form.label('email') }}
            {{ form.render('email', ['class': 'form-control']) }}
        </div>
        <div class="form-group">
            {{ form.label('comments') }}
            {{ form.render('comments', ['class': 'form-control']) }}
        </div>
        <div class="form-group">
            {{ submit_button('发送', 'class': 'btn btn-primary btn-large') }}
        </div>
    </fieldset>
</form>
