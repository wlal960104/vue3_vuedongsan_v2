<template>

  <div class="container join-container">
    <h2 class="p-3">회원가입</h2>
    <div class="join-template">
      <!--<label for="input-id" class="form-label">Your vanity URL</label>-->
      <div class="input-group mb-4 input-join">
        <label class="input-group-text">아이디 <span class="highlight-red">&nbsp;*</span></label>
        <input aria-describedby="button-addon2" aria-label="Recipient's username" class="form-control" id="input-id" placeholder="ID"
               type="text">
        <button class="btn btn-outline-secondary" type="button">중복 확인</button>
      </div>
      <div class="input-group mb-3 input-join">
        <label class="input-group-text">비밀번호 <span class="highlight-red">&nbsp;*</span></label>
        <input aria-describedby="button-addon2" aria-label="Recipient's username" class="form-control"
               placeholder="비밀번호를 입력해주세요."
               type="text">
      </div>
      <div class="input-group mb-3 input-join">
        <label class="input-group-text text-wrap">비밀번호 확인<span class="highlight-red">&nbsp;*</span></label>
        <input aria-describedby="button-addon2" aria-label="Recipient's username" class="form-control"
               placeholder="비밀번호를 재입력해주세요."
               type="text">
      </div>
      <div class="input-group mb-3 input-join">
        <label class="input-group-text">이름<span class="highlight-red">&nbsp;*</span></label>
        <input aria-describedby="button-addon2" aria-label="Recipient's username" class="form-control"
               placeholder="이름을 입력해주세요."
               type="text">
      </div>

      <!-- 성별 라디오 -->
      <div class="radio-gender row input-join mb-3">
        <div class="col-auto"><div class="d-inline-flex p-2">성별<span class="highlight-red">&nbsp;*</span></div></div>
        <div class="col-auto">
          <input id="checkMale" autocomplete="off" checked class="btn-check" name="options-base" type="radio">
          <label class="btn btn-outline-primary" for="checkMale" style="margin-right: 10px">남</label>
          <input id="checkFemale" autocomplete="off" class="btn-check" name="options-base" type="radio">
          <label class="btn btn-outline-danger" for="checkFemale">여</label>
        </div>
      </div>
       <div class="input-group mb-3 input-birthday">
        <label class="input-group-text">생년월일<span class="highlight-red">&nbsp;*</span></label>
        <input aria-describedby="button-addon2" aria-label="Recipient's username" class="form-control"
               placeholder="이름을 입력해주세요."
               type="date">
      </div>
      <div class="input-group mb-3">
        <label class="input-group-text">휴대폰 번호<span class="highlight-red">&nbsp;*</span></label>
        <input aria-describedby="button-addon2" aria-label="Recipient's username" class="form-control"
               placeholder="휴대폰 번호를 입력해주세요."
               type="text">
      </div>
       <div class="input-group mb-3">
        <label class="input-group-text">이메일 주소<span class="highlight-red">&nbsp;*</span></label>
        <input aria-describedby="button-addon2" aria-label="Recipient's username" class="form-control"
               placeholder="이메일 주소를 입력해주세요."
               type="text">
      </div>
      <div class="input-group mb-3">
        <label class="input-group-text">주소<span class="highlight-red">&nbsp;*</span></label>
        <input aria-describedby="button-addon2" aria-label="Recipient's username" class="form-control"
               placeholder="주소를 입력해주세요."
               type="text">
      </div>
      <div class="input-group mb-3">
        <label class="input-group-text">상세 주소<span class="highlight-red">&nbsp;*</span></label>
        <input aria-describedby="button-addon2" aria-label="Recipient's username" class="form-control"
               placeholder="상세 주소를 입력해주세요."
               type="text">
      </div>
       <button type="submit" class="btn btn-primary">가입하기</button>





    </div>
  </div>



  <!--&lt;!&ndash; 게터 테스트 &ndash;&gt;-->
  <!--<div class="radio-gender row">-->
  <!--  <div class="col-2">성별</div>-->
  <!--  <div class="col-auto">나이</div>-->
  <!--</div>-->



</template>

<script>
export default {
  name: 'Join',
}
</script>

<style>
.join-container {
  width: 80%;
}
.input-join {
  width: 100%;
}
.highlight-red {
  color: red;
}
.join-template {
  margin-top: 30px;
  margin-bottom: 30px;
}

.input-birthday {
  width: 80%;
}

</style>